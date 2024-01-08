module.exports = (req, res, next) => {
 
  if(!req.session.isAuthenticate){
    return  res.status(401).json({ message: 'Unauthorized' }); // User is not logged in, deny access

  }
  next();
};
