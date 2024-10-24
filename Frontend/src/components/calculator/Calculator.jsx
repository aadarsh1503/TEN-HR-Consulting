import React, { useState } from 'react';
import "./Calculator.css"

const Calculator = () => {
    const [salary, setSalary] = useState('');
    const [employeeStatus, setEmployeeStatus] = useState('');
    const [jhtEmployee, setJhtEmployee] = useState(0);
    const [jpEmployee, setJpEmployee] = useState(0);
    const [bpjsEmployee, setBpjsEmployee] = useState(0);
    const [jkkCompany, setJkkCompany] = useState(0);
    const [jhtCompany, setjhtCompany] = useState(0);
    const [jpCompany, setjpCompany] = useState(0);
    const [jkmCompany, setJkmCompany] = useState(0);
    const [bpjsCompany, setBpjsCompany] = useState(0);
    const [biayaJabatan, setbiayaJabatan] = useState(0);
    const [grossSalary, setgrossSalary] = useState(0);
    const [netSalary, setnetSalary] = useState(0);
    const [annualize, setannualize] = useState(0);
    const [ptkp, setptkp] = useState(0);
    const [pkp, setpkp] = useState(0);
    const [roundPkp, setroundPkp] = useState(0);
    const [tax, settax] = useState(0);
    const [wht, setwht] = useState(0);
    const [takeHomepay, settakeHomepay] = useState(0);
    const [totalBpjstk, settotalBpjstk] = useState(0);
    const [totalBpjskesehatan, settotalBpjskesehatan] = useState(0);
    const [totalBpjs, settotalBpjs] = useState(0);
    const [costTocompany, setcostTocompany] = useState(0);



    const handleSalaryChange = (e) => {
        const salary = e.target.value;
        setSalary(salary);

        // Example calculation
        setJhtEmployee((salary * 0.02).toFixed(2));
        setJpEmployee((salary * 0.00095596).toFixed(2));
        setBpjsEmployee((salary * 0.05).toFixed(2));
        setjhtCompany((salary * 0.01).toFixed(2))
        setJkkCompany((salary * 0.04).toFixed(2));
        setjpCompany((salary * 0.01).toFixed(2));
        setJkmCompany((salary * 0.03).toFixed(2));
        setBpjsCompany((salary * 0.05).toFixed(2));
        setbiayaJabatan((salary * 0.05).toFixed(2));
        setgrossSalary((salary * 0.01).toFixed(2));
        setnetSalary((salary * 0.01).toFixed(2));
        setannualize((salary * 0.01).toFixed(2));
        setptkp((salary * 0.06).toFixed(2));
        setpkp((salary * 0.06).toFixed(2));
        setroundPkp((salary * 0.06).toFixed(2));
        settax((salary * 0.15).toFixed(2));
        setwht((salary * 0.03).toFixed(2));
        settakeHomepay((salary * 0.75).toFixed(2));
        settotalBpjstk((salary * 0.05).toFixed(2));
        settotalBpjskesehatan((salary * 0.05).toFixed(2));
        settotalBpjs((salary * 0.05).toFixed(2));
        setcostTocompany((salary * 1.02).toFixed(2));
        
    };

    return (
        <div className="calculator-container">
            <h1>Cost Calculator (Beta)</h1>
            <p className="instructions">
                <strong>How to use:</strong> Input annual salary, select employee status and then just click outside the box, it will automatically generate your CTC.
            </p>
            <div className='groupcont'>
            <div className="form-group">
                <label>Annual Salary</label>
                <div className="input-group">
                    <span>Rp.</span>
                    <input
                        type="number"
                        value={salary}
                        onChange={handleSalaryChange}
                        placeholder="Enter salary"
                    />
                </div>
            </div>
            <div className='gropcont'>
            <div className="form-group ">
                <label>Employee Status</label>
                <select  value={employeeStatus} onChange={(e) => setEmployeeStatus(e.target.value)}>
                    <option value="">Select Employee Status</option>
                    <option value="vl-1">TK/O: Single with no dependents</option>
                    <option value="vl-2">K/O: Married with no dependents</option>
                    <option value="vl-3">K/I: Married with one dependent</option>
                    <option value="vl-4">K/2: Married with two dependents</option>
                    <option value="vl-5">K/3: Married with three or more dependents</option>
                </select>
            </div>
            </div>
            </div>

            <div className="results">
                <div className="result-card">
                    <h3>JHT Employee</h3>
                    <h3>Rp{jhtEmployee}</h3>
                    <p>Calculate JHT contributions: 5.7% of basic salary and fixed allowances, with employees paying 2%.</p>
                </div>
                <div className="result-card">
                    <h3>JP Employee</h3>
                    <h3>Rp{jpEmployee}</h3>
                    <p>JP (Pension Guarantee) contributions are made by both the employer and employee, deducted monthly from salary. The contribution is calculated based on basic salary and fixed allowances. Employee bear 1% of the Pension Guarantee (JP) premium.</p>
                </div>
                <div className="result-card">
                    <h3>BPJS Employee</h3>
                    <h3>Rp{bpjsEmployee}</h3>
                    <p>BPJS Kesehatan is a health protection and insurance program for Indonesian citizens, including company employees, funded by 5% of the monthly salary, with 4% covered by the employer.</p>
                </div>
                <div className="result-card">
                    <h3>JHT Company</h3>
                    <h3>Rp{jhtCompany}</h3>
                    <p>Calculate JHT contributions: 5.7% of basic salary and fixed allowances, with employer paying 3.7%.</p>
                </div>
                <div className="result-card">
                    <h3>JP Company</h3>
                    <h3>Rp{jpCompany}</h3>
                    <p>JP (Pension Guarantee) contributions are made by both the employer and employee, deducted monthly from salary. The contribution is calculated based on basic salary and fixed allowances. Employers bear 2% of the Pension Guarantee (JP) premium.</p>
                </div>
                <div className="result-card">
                    <h3>JKK Company</h3>
                    <h3>Rp{jkkCompany}</h3>
                    <p>Work Accident Insurance (JKK) is a protection provided by BPJS Ketenagakerjaan for employees against workplace accident risks.</p>
                </div>
                <div className="result-card">
                    <h3>JKM Company</h3>
                    <h3>Rp{jkmCompany}</h3>
                    <p>JKM (Death Benefit) is a BPJS Ketenagakerjaan program offering cash benefits to beneficiaries if a participant dies of non-work-related causes. Companies fully cover the JKM premium, set at 0.30% of the monthly wage for salaried workers."</p>
                </div>
                <div className="result-card">
                    <h3>BPJS Company</h3>
                    <h3>Rp{bpjsCompany}</h3>
                    <p>BPJS Kesehatan is a health protection and insurance program for Indonesian citizens, including company employees, funded by 5% of the monthly salary, with 1% covered by the employee.</p>
                </div>
                <div className="result-card">
                    <h3>Biaya Jabatan</h3>
                    <h3>Rp{biayaJabatan}</h3>
                    <p>"Occupational Expenses" or "Position Expenses" are deductible amounts in the Indonesian tax system, representing a portion of an employee's income exempt from tax, to account for job-related costs.</p>
                </div>
                <div className="result-card">
                    <h3>Gross Salary</h3>
                    <h3>Rp{grossSalary}</h3>
                    <p>Gross Salary refers to the total income earned by an employee before any deductions are made.</p>
                </div>
                <div className="result-card">
                    <h3>Net Salary</h3>
                    <h3>Rp{netSalary}</h3>
                    <p>The amount of income an employee takes home after all deductions are made from the gross salary.</p>
                </div>
                <div className="result-card">
                    <h3>Annualize</h3>
                    <h3>Rp{annualize}</h3>
                    <p>Annual salary refers to the total amount of money an employee earns from their job in a year, excluding additional bonuses or overtime pay.</p>
                </div>
                <div className="result-card">
                    <h3>PTKP</h3>
                    <h3>Rp{ptkp}</h3>
                    <p>Penghasilan Tidak Kena Pajak (PTKP) refers to Non-Taxable Income in Indonesia. It is the threshold below which an individual's income is not subject to income tax (Pajak Penghasilan or PPh).</p>
                </div>
                <div className="result-card">
                    <h3>PKP</h3>
                    <h3>Rp{pkp}</h3>
                    <p>Penghasilan Kena Pajak (PKP) in Indonesia refers to Taxable Income. It is the portion of an individual's or entity's income that is subject to income tax. PKP is determined after making permissible deductions and adjustments to the Gross Income.</p>
                </div>
                <div className="result-card">
                    <h3>Round PKP</h3>
                    <h3>Rp{roundPkp}</h3>
                    <p>PKP (Penghasilan Kena Pajak) is the income amount that is subject to tax in Indonesia, calculated by deducting allowable deductions from the gross income.
                    </p>
                </div>
                <div className="result-card">
                    <h3>TAX</h3>
                    <h3>Rp{tax}</h3>
                    <p>Income Tax that is a mandatory contribution levied on employees based on the income they earn.</p>
                </div>
                <div className="result-card">
                    <h3>WHT</h3>
                    <h3>Rp{wht}</h3>
                    <p>Withholding Tax (WHT) in Indonesia, commonly referred to as Pajak Potong or Pajak Pemotongan, is a tax deducted at source on certain types of transactions. The payer of the income is responsible for deducting and remitting the tax to the tax authorities before the funds are received by the payee.</p>
                </div>
                <div className="result-card">
                    <h3>Take Home Pay</h3>
                    <h3>Rp{takeHomepay}</h3>
                    <p>Take-home pay, often referred to as net salary, is the amount of income that an employee actually receives after all deductions are made from the gross salary.</p>
                </div>
                <div className="result-card">
                    <h3>Total BPJSTK</h3>
                    <h3>Rp{totalBpjstk}</h3>
                    <p>BPJS Ketenagakerjaan (BPJSTK) is Indonesia's Employment Social Security Agency, offering workers key programs like JHT (Old-Age Benefits), JKK (Work Accident Insurance), JKM (Life Insurance), and JP (Pension Security) to ensure financial security during retirement, accidents at work, or family bereavement.</p>
                </div>
                <div className="result-card">
                    <h3>Total BPJS Kesehatan</h3>
                    <h3>Rp{totalBpjskesehatan}</h3>
                    <p>The contribution for BPJS Kesehatan participants is 5% of the monthly salary, with the employer covering 4% and the employee contributing 1%.</p>
                </div>
                <div className="result-card">
                    <h3>Total BPJS</h3>
                    <h3>Rp{totalBpjs}</h3>
                    <p>Total BPJS is the sum of contributions to Indonesia's employment and healthcare social security programs, covering both employer's and employee's payments for health, pension, and insurance benefits.</p>
                </div>

            </div>
            <div className="result-card-end">
                    <h3>Cost To Company (Estimated)</h3>
                    <h3>Rp{costTocompany}</h3>
                    <p>Cost to Company (CTC) refers to the total amount an employer spends on an employee in a year. It's not just the salary but encompasses all costs associated with employment.</p>
                </div>
        </div>
    );
};

export default Calculator;
