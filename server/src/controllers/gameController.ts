import { Response } from 'express'
import Game from '../models/Game'
import { AuthRequest } from '../middleware/auth'

export const getAllGames = async (req: AuthRequest, res: Response) => {
  try {
    const { status, genre, search, sort = 'newest', page = 1, limit = 12 } = req.query

    // 공개 목록: 승인된 게임만, archived 제외
    const filter: Record<string, unknown> = {
      approvalStatus: 'approved',
      status: { $in: ['beta', 'published'] }
    }

    if (status && status !== 'all') {
      filter.status = status
    }

    if (genre && genre !== 'all') {
      filter.genre = genre
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    }

    const sortOption: Record<string, 1 | -1> =
      sort === 'popular' ? { playCount: -1 }
      : sort === 'rating' ? { rating: -1 }
      : { createdAt: -1 }

    const skip = (Number(page) - 1) * Number(limit)

    const games = await Game.find(filter)
      .populate('developerId', 'username')
      .sort(sortOption)
      .skip(skip)
      .limit(Number(limit))

    const total = await Game.countDocuments(filter)

    res.json({
      success: true,
      games,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    })
  } catch (error) {
    console.error('Get games error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const getGameById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(404).json({ message: '게임을 찾을 수 없습니다' })
    }

    const game = await Game.findById(id).populate('developerId', 'username email')

    if (!game) {
      return res.status(404).json({ message: '게임을 찾을 수 없습니다' })
    }

    res.json({
      success: true,
      game
    })
  } catch (error) {
    console.error('Get game error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const createGame = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: '인증이 필요합니다' })
    }

    if (req.user.role !== 'developer') {
      return res.status(403).json({ message: '개발자만 게임을 업로드할 수 있습니다' })
    }

    const { title, description, price, isPaid, status } = req.body
    const files = req.files as { [fieldname: string]: Express.Multer.File[] }

    if (!title || !description) {
      return res.status(400).json({ message: '제목과 설명은 필수입니다' })
    }

    if (!files || !files.gameFile) {
      return res.status(400).json({ message: '게임 파일은 필수입니다' })
    }

    const gameData: any = {
      title,
      description,
      developerId: req.user.id,
      gameFile: files.gameFile[0].path,
      price: isPaid ? Number(price) : 0,
      isPaid: isPaid === 'true',
      status: status || 'draft'
    }

    if (files.thumbnail) {
      gameData.thumbnail = files.thumbnail[0].path
    }

    const game = await Game.create(gameData)

    res.status(201).json({
      success: true,
      message: '게임이 성공적으로 업로드되었습니다',
      game
    })
  } catch (error) {
    console.error('Create game error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const updateGame = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: '인증이 필요합니다' })
    }

    const { id } = req.params
    const game = await Game.findById(id)

    if (!game) {
      return res.status(404).json({ message: '게임을 찾을 수 없습니다' })
    }

    if (game.developerId.toString() !== req.user.id) {
      return res.status(403).json({ message: '자신의 게임만 수정할 수 있습니다' })
    }

    const { title, description, price, isPaid, status } = req.body
    const files = req.files as { [fieldname: string]: Express.Multer.File[] }

    if (title) game.title = title
    if (description) game.description = description
    if (price !== undefined) game.price = Number(price)
    if (isPaid !== undefined) game.isPaid = isPaid === 'true'
    if (status) game.status = status

    if (files && files.gameFile) {
      game.gameFile = files.gameFile[0].path
    }

    if (files && files.thumbnail) {
      game.thumbnail = files.thumbnail[0].path
    }

    await game.save()

    res.json({
      success: true,
      message: '게임이 수정되었습니다',
      game
    })
  } catch (error) {
    console.error('Update game error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const deleteGame = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: '인증이 필요합니다' })
    }

    const { id } = req.params
    const game = await Game.findById(id)

    if (!game) {
      return res.status(404).json({ message: '게임을 찾을 수 없습니다' })
    }

    if (game.developerId.toString() !== req.user.id) {
      return res.status(403).json({ message: '자신의 게임만 삭제할 수 있습니다' })
    }

    await Game.findByIdAndDelete(id)

    res.json({
      success: true,
      message: '게임이 삭제되었습니다'
    })
  } catch (error) {
    console.error('Delete game error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const getMyGames = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: '인증이 필요합니다' })
    const games = await Game.find({ developerId: req.user.id }).sort({ createdAt: -1 })
    res.json({ success: true, games })
  } catch (error) {
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const getDeveloperStats = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: '인증이 필요합니다' })
    const games = await Game.find({ developerId: req.user.id })
    const totalGames = games.length
    const totalPlays = games.reduce((sum, g) => sum + (g.playCount || 0), 0)
    const totalRevenue = games.reduce((sum, g) => sum + ((g.price || 0) * (g.playCount || 0)), 0)
    const publishedGames = games.filter(g => g.status === 'published' || g.status === 'beta').length
    const draftGames = games.filter(g => g.status === 'draft').length
    const recentGames = games.slice(0, 5).map(g => ({
      id: g._id,
      title: g.title,
      status: g.status,
      playCount: g.playCount || 0,
      price: g.price || 0,
      isPaid: g.isPaid,
      createdAt: g.createdAt,
      thumbnail: g.thumbnail,
    }))
    res.json({
      success: true,
      stats: { totalGames, totalPlays, totalRevenue, publishedGames, draftGames },
      recentGames,
    })
  } catch (error) {
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}

export const incrementPlayCount = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params

    const game = await Game.findByIdAndUpdate(
      id,
      { $inc: { playCount: 1 } },
      { new: true }
    )

    if (!game) {
      return res.status(404).json({ message: '게임을 찾을 수 없습니다' })
    }

    res.json({
      success: true,
      playCount: game.playCount
    })
  } catch (error) {
    console.error('Increment play count error:', error)
    res.status(500).json({ message: '서버 오류가 발생했습니다' })
  }
}
