const jwt = require('jsonwebtoken')

const isAdmin = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded 

   
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: 'Access denied. You are not an admin.' })
        }

        next() 
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' })
    }
}

module.exports = isAdmin
