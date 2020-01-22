module.exports = (app) => {
  app.get('/api/test',(req,res)=>{
    res.send({get:"success"})
  });

  app.post('/api/test',(req,res)=>{
      res.send({post:"success"})
  });
};
