exports.checkAccessLevel = (requiredAccessLevel) => {
    return (req, res, next) => {
      const userAccessLevel = req.user.accessLevel; // Assuming the user object has an 'accessLevel' property
    
        if (userAccessLevel === requiredAccessLevel) {
        return next();
        }
    
        return res.status(403).json({
        message: 'Access denied',
        });
    };
    };
