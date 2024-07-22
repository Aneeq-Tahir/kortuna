export const checkOutMutation = `
    mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
        checkoutCreate(input: { lineItems: $lineItems }) {
            checkout {
                id
                webUrl
            }
        }
    }
`;
