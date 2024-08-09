import Fastify from "fastify";

const fastify = Fastify({});


fastify.addHook('onRequest', (request, reply, done) => {
    console.log('onRequest');
    done()
})

fastify.addHook('preParsing', (request, reply, payload, done) => {
    console.log('preParsing');
    done(null, payload)
})

fastify.addHook('preValidation', (request, reply, done) => {
    console.log('preValidation');
    request.body = request.body
    done()
})

fastify.addHook('preHandler', (request, reply, done) => {
    console.log('preHandler');
    done()
})

fastify.addHook('preSerialization', (request, reply, payload, done) => {
    console.log('preSerialization');
    const err = null
    done(err, payload)
})

fastify.addHook('onSend', (request, reply, payload, done) => {
    console.log('onSend');

    const err = null;
    done(err, payload)
})

fastify.addHook('onResponse', (request, reply, done) => {
    console.log('onResponse');
    done()
})

fastify.get('/', (_,reply)=>{
    reply.send({message:'test'});
})

fastify.post('/', (_,reply)=>{
    reply.send({message:'test'});
})

fastify.listen(
    { host: "0.0.0.0", port: 230 },
    (err, address) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
            console.log(`Server start ${address}`);
    }
);