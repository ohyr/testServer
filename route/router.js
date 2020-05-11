const express = require('express');
const route = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth')

route.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated, user.updateUser)
    .delete(auth.isBasicAuthenticated, user.deleteUser)

route.route('/test')
    .get((req, res)=>{

        console.log(req.query)
        res.send('확인')
    })
    .post((req, res)=>{

        console.log(req.body)
        res.send("POST방식")
    })

route.route('/test/:id')
    .get((req, res)=>{
    //데이터를 업데이트, 삭제
    //아이디만 보내는 방식 많이쓴다
        console.log(req.query)
        res.send('확인2')
    })

route.route('/rtest')
    .get((req, res)=>{
        console.log(req.query)
        res.send({"result":"현재 호출한 부분은 Get"})
    })
    .post((req, res) => {
        console.log(req.body)
        res.send({"result": "현재 호출한 부분은 Post"})
    })

route.route('/rtest/:id')
    .get((req, res) => {
        console.log("읽을 내용 PrimaryKey : " + req.params.id)
        res.send({"result": "현재 호출한 부분은 Get Param"})
    })
    .put((req, res) => {
        console.log("수정할 내용 PrimaryKey : " + req.params.id)
        console.log(req.body)
        res.send({"result": "현재 호출한 부분은 Update"})
    })
    .delete((req, res) => {
        console.log("삭제할 내용 PrimaryKey: " + req.params.id)
        res.send({"result": "현재 호출한 부분은 Delete"})
    })

module.exports = route;

//Create = Post = 회원가입
//Read = Get = 로그인
//Update = Put = 회원정보수정
//Delete = Delete = 탈퇴


/*
route.get('/user',function(err, res){
    res.send('확인!!')
})
route.post('/user',function(err, res){
    res.send('확인!!')
})
*/
