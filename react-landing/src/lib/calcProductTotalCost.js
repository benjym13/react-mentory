import { formatCurrency } from "./formatcurrency";

export function calcProductTotalCost(count, value) {
    const total = count * value;
    return formatCurrency(total); 
}