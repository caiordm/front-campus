// @ts-nocheck
import { request } from "http"

/**
 * */
export const actions = {
    // @ts-ignore
    login:/** @param {import('./$types').RequestEvent} event */  async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
    }
}

export function load({ params }) {
    return {
        user: {

        }
    }
}