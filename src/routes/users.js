const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res) =>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/archivos',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/signup', (req, res) =>{
    res.render('users/signup');
});

router.get('/contact', (req, res) =>{
    res.render('users/contact');
});

router.post('/users/signup', async (req, res) => {
    const {name, email, password, confirm_password} = req.body;
    const errors = [];
    if(name.length <= 0){
        errors.push({text: 'Ingrese un nombre'});
    }
    if(email.length <= 0){
        errors.push({text: 'Ingrese un Email'});
    }
    if(password.length <= 0){
        errors.push({text: 'Ingrese una contraseña'});
    }
    if(confirm_password.length <= 0){
        errors.push({text: 'Vuelva a ingresar su contraseña'});
    }
    if(password != confirm_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if(password.length < 5){
        errors.push({text: 'La contraseña debe contener más de 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('users/signup', {errors, name, email, password, confirm_password});
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'El email ya está registrado con otra cuenta');
            res.redirect('/users/signup');
        }
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Registro exitoso');
        res.redirect('/users/signin');
    }
});

router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/')
});

module.exports = router;