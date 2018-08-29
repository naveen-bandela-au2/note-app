if(process.env.NODE_ENV='production'){
    module.exports={mongoURI:
    'mongodb://luben:luben123@ds235732.mlab.com:35732/nodeapp'}
}
    else {
        module.exports={mongoURI:
            'mongodb://localhost/noteapp'}
    }