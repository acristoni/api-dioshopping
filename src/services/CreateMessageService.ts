import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

interface IMessage {
    email: string;
    message: string;
    teor: string;
}

class CreateMessageService {
    async execute({email, message, teor}: IMessage){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!email){
            throw new Error("Por favor informe um email!")
        }

        if(!message){
            throw new Error("Por favor escreva uma messagem!")
        }

        if(!teor){
            throw new Error("Por favor escolha um teor do comentario!")
        }

        const newMessage = messageRepository.create({ email, message, teor })

        await messageRepository.save(newMessage);

        return newMessage;
    }
}

export  { CreateMessageService }