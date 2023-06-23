import { redirect } from "@sveltejs/kit";
import { count } from "../../../../store";

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        const User = {
            nome : formData.get('nome'),
            email : formData.get('email'),
            posicao : formData.get('posicao'),
            senha : formData.get('senha'),
            token : count.token 
        }
       
           
      
        const res = await fetch(`http://localhost:8080/register`,
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(User),
        });
        const data = await res.json();
    
        if(data=='token vazio'){
            throw redirect(301,'/login?token_vazio');
        }else if(data=='nao autorizado'){
            throw redirect(301,'/login?nao-autorizado');
        }
        else{
      
        }
        if(data ==='inserido com sucesso'){
            
            throw redirect(301,'/dashboard-admin');

        }else if(data ==='dados incompletos!'){
           
                
               throw redirect(302, '/');
        }else if(data ==='o Email que tentou inserir ja esta cadastrado'){
           
                
               throw redirect(302, '/');
        }
        
    }
};