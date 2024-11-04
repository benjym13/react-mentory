export function formatCurrency(value, locale = 'es-US', currency = 'USD') {
    return new Intl.NumberFormat(
        locale,
        {
            style: 'currency',
            currency

        }
    ).format(value)
}