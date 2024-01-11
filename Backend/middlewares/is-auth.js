module.exports = (req, res, next) => {
 
  if(!req.session.isAuthenticate){
    console.log(req.ip)
    return  res.status(401).json({ message: 'Unauthorized' }); // User is not logged in, deny access
  }
  next();
};
