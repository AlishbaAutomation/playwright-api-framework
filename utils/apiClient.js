export class apiClient{
async postRequest(request,url,body){
    return await request.post(url,{
        data:body
    });

}}