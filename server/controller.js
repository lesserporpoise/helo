module.exports={
    create:(req,res,next) => {const dbInstance = req.app.get('db');
    const {name,password} = req.body;
        dbInstance.create_user([name,password])
        .then(()=>res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({errorMessage:"Nothing works, cause you suck."});
            console.log(err)
        })
        dbInstance.return_user([name,password])
},
//     getOne:(req,res,next) => {const dbInstance = req.app.get('db');
//         dbInstance.read_product(req.params.id)
//         .then(product => res.status(200).send(product))
//         .catch(err=>{
//             res.status(500).send({errorMessage: "Ya done broke it dagnabbit..."});
//             console.log(err)})
// },
    getPosts:(req,res,next) => {const dbInstance = req.app.get('db');
        dbInstance.read_posts()
        .then(products=>res.status(200).send(products))
        .catch(err=>{
            res.status(500).send({errorMessage: "Do Mo Betta!!!"});
            console.log(err)
        })
},
//     update:(req,res,next) => {const dbInstance = req.app.get('db');
//         dbInstance.update_product(req.query.desc,req.params.id)
//         .then(()=>res.sendStatus(200))
//         .catch(err=>{
//             res.status(500).send({errorMessage: "Ya done broke it dagnabbit..."});
//             console.log(err)
//         })
// },
//     delete:(req,res,next) => {const dbInstance = req.app.get('db');
//         dbInstance.delete_product(req.params.id)
//         .then(()=>res.sendStatus(200))
//         .catch(err=>{
//             res.status(500).send({errorMessage:"Ya done broke it dagnabbit..."});
//             console.log(err)
//         })
// }
}