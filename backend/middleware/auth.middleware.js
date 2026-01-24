const jwt = require('jsonwebtoken'); 

const checktoken = async (req, res, next) => { 
    const authHeader = req.headers['authorization'];  
    const token = authHeader && authHeader.split(' ')[1]; // gets the token itself 
    // handle validation here 
    if (token == null) { 
        return res.status(401).json({ 
            Error: "No valid Token to appear"
        }); 
    } 
    // use the verify gfunction to verify the token as such 
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, Username) => {  
        if (err) { 
            return res.status(403).json( { 
                invalidToken: 'No Access'
            }); 
        } 
        req.username = Username 
        next(); 
    })
} 

module.exports = { checktoken }; 