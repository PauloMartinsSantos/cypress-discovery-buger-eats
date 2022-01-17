var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '(83) 99200-0222',
            address:{
                postalcode: '40020-176',
                street: 'Ladeira da Montanha',
                district:'Centro',
                city_state:'Salvador/BA',
                number: '1450',
                datails: 'Ap 71'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'    
        }

        return data

    }
}