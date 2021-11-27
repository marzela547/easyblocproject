const express = require("express");
let router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
let SecModelClass = require('./sec.model.js');
let SecModel = new SecModelClass();
const mailSender = require('../../../utils/mailer');
//-------------------GITHUB AUTENTICACIÓN------------------------------
const GitHubStrategy = require('passport-github').Strategy;
const dotenv = require('dotenv');
const session = require('express-session');
/*
router.use(session({
  secret: process.env.keySecret,
  resave: false,
  saveUninitialized: false, 
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 24*60*50*1000,
  },
}));

router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser(function(user,cb){
  cb(null, user);
});

passport.deserializeUser(function(id,cb){
  cb(null, id);
});
*/
/*

passport.use(new GitHubStrategy({
    clientID: process.env.gitClientID,
    clientSecret: process.env.gitClientSecret,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log(profile);
    cb(null, profile);
  }
));
//--------------------------------------------------------------------
//-------------------KAKAO AUTENTICACIÓN------------------------------
const KakaoStrategy = require('passport-kakao').Strategy

passport.use(new KakaoStrategy({
  clientID : process.env.kakaoClientID,
   clientSecret: process.env.kakaoClientSecret, // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
    callbackURL : 'http://localhost:3000/api/hw/kakao/getinfo'
},
(accessToken, refreshToken, profile, done, cbb) => {
  // 사용자의 정보는 profile에 들어있다.
  cbb(null, profile);
}
))
*/
//--------------------------------------------------------------------
router.post('/login', async (req, res, next)=>{
  try {
    const {email, pswd} = req.body;
    //Validar los datos
    let userLogged = await SecModel.getByEmail(email);
    if (userLogged) {
      const isPswdOk = await SecModel.comparePassword(pswd, userLogged.password);
      if (isPswdOk) {
        // podemos validar la vigencia de la contraseña
        delete userLogged.password;
        delete userLogged.oldpasswords;
        delete userLogged.lastlogin;
        delete userLogged.lastpasswordchange;
        delete userLogged.passwordexpires;
        let payload = {
          jwt: jwt.sign(
            {
              email: userLogged.email,
              _id: userLogged._id,
              roles: userLogged.roles
            },
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
          ),
          user: userLogged
        };
        return res.status(200).json(payload);
      }
    }
    console.log({email, userLogged});
    return res.status(400).json({msg: "Credenciales no son Válidas"});
  }catch (ex){
    console.log(ex);
    res.status(500).json({"msg":"Error"});
  }
});

router.post('/signin', async (req, res, next) => {
  try {
    const { name, lastname, phone, email, password} = req.body;
    let userAdded = await SecModel.createNewUser( name, lastname, phone, email, password);
    delete userAdded.password;
    console.log(userAdded);
    res.status(200).json({"msg":"Usuario creado correctamente"});
  } catch (ex) {
    res.status(500).json({ "msg": "Error" });
  }
});

router.get('/kakao/getinfo',passport.authenticate('kakao', { failureRedirect: '/' }), (req, res)=>{
  res.status(200).json({"msg":"¡Eureka! Funciona, Kakao"});
});

router.get('/auth/kakao',
  passport.authenticate('kakao'));
/*
router.get('/oauth/kakao/callback', 
  passport.authenticate('kakao', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.status(401);
  });
*/
//----------------------GITHUB

router.get('/github/getinfo', (req, res)=>{
  res.status(200).json({"msg":"¡Eureka! Funciona, GitHub"});
});
router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.status(401);
  });
//-------------------------------
let cache = '';
router.post('/recovery', async (req, res, next) => {
  try {
    const {contra} = req.body;
    let usu = await SecModel.cambiarContra(correo, contra);
    res.status(200).json({"msg":"Contraseña editata correctamente"});
  } catch (e) {
    res.status(500).json({ "msg": "Error al editar la contraseña" });
  }
});
router.post('/login', async(req, res, next)=>{});
router.post('/signin', async(req, res, next)=>{});

router.post('/passrecovery', async(req, res, next)=>{
  const {correo} = req.body;
  let usu = await SecModel.getByEmail(correo);
  if(usu){
    cache=usu.email;
    mailSender("marcelazelaya547@yahoo.com", "Pruebaaaaas", "Esto es una prueba de correo");
  }

  res.status(200).json({"msg":"Correo enviado correctamente"});
})

module.exports = router;
