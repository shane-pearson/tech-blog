const router = require('express').Router();
const { Post } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Post.findAll({
        where: {
            userId: req.session.userId,
        }
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('allpostsadmin', {
        layout: "dashboard", 
        posts, 
      });
    } catch (err) {
     res.redirect('login')
    }
  });

  router.get('/new', withAuth, (req, res) => {
    res.render('newpost', {
        layout: 'dashboard',
    })
  })


  router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
      res.render('editpost', {
        layout: 'dashboard',
        post,
      });
      } else {
        res.status(404).end()
      }
  
    } catch (err) {
        res.redirect('login')
    }
  });

  module.exports = router