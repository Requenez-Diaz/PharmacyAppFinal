
import { Pharmacy} from "./Pharmacy";

class JournalLine {
    code: string;
    account: string;
    debit: number;
    credit: number;
    pharmacy: Pharmacy

    constructor(code: string, account: string, debit: number, credit: number, pharmacy: Pharmacy){
        this.code = code;
        this.account = account;
        this.debit = debit;
        this.credit = credit;
        this.pharmacy = Pharmacy;
    }
    
}

export {
    Pharmacy
}