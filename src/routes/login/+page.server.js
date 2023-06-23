export const actions = {
    login: async ({request}) => {
        const formData = Object.fromEntries(await request.formData());
        return {
            success: true,
            formData
        }
    }
}