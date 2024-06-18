import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "No token found after Bearer" });
    }

    try {
        console.log('Token:', token);  // Log the token for debugging
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);  // Log decoded token for debugging

        req.body.userId = decoded.id;
        next();
    } catch (error) {
        console.error('JWT Error:', error);  // Log error details
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
