function createAccount(pin, amount) {
    let set_pin = pin
    let amt = amount ? amount : 0
    return {
        checkBalance(p) {
            if (p === set_pin) {
                return `$${amt}`
            }
            return "Invalid PIN."
        },
        deposit(p, depo) {
            if (p === set_pin) {
                amt = amt + depo
                return `Succesfully deposited $${depo}. Current balance: $${amt}.`
            }
            return "Invalid PIN."
        },
        withdraw(p, withdraw) {
            if (p === set_pin) {
                if ((amt - withdraw) < 0) {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled."
                }
                amt = amt - withdraw
                return `Succesfully withdrew $${withdraw}. Current balance: $${amt}.`
            }
            return "Invalid PIN."
        },
        changePin(old_pin, new_pin) {
            if (old_pin === set_pin) {
                set_pin = new_pin
                return "PIN successfully changed!"
            }
            return "Invalid PIN."
        }
    }
}

module.exports = { createAccount };
