/**
 * Represents an Expense.
 * @class
 */
class Expense {
  /**
   * Create an expense object.
   * @constructor
   * @param {string} date - The date of the expense.
   * @param {number} income - The income amount.
   * @param {number} expense - The expense amount.
   * @param {string} detail - The details or description of the transaction.
   */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel to manage a collection of expenses.
 * @class
 */
class ExpenseModel {
  /**
   * Initialize the ExpenseModel with an empty array of expenses.
   * @constructor
   */
  constructor() {
    this.expenses = [];
  }

  /**
   * Add a new Expense object to the collection.
   * @param {Expense} expense - The Expense object to be added.
   */
  add(expense) {
    this.expenses.push(expense);
  }

  /**
   * Return all expense objects from the collection.
   * @return {Expense[]} An array containing all Expense objects.
   */
  getAll() {
    return this.expenses;
  }

  /**
   * Calculate the total income from all entries.
   * @return {number} The sum of all income amounts.
   */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * Calculate the total expenses from all entries.
   * @return {number} The sum of all expense amounts.
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  /**
   * Calculate the remaining balance.
   * @return {number} Total income minus total expense.
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };