import React, { useState } from "react"
import { Title, Textfield, NetSalary } from "./HomePageStyledComponents"
import { Typography, Box } from "@mui/material"

const HomePage = () => {
  const [salary, setSalary] = useState(3500)
  const [usdEurRatio, setUsdEurRatio] = useState(0.95)
  const [irpf, setIrpf] = useState(20)
  const [cuota, setCuota] = useState(290)
  const [gestoria, setGestoria] = useState(60)
  const [rent, setRent] = useState(425)
  const [debts, setDebts] = useState(380)
  const [subs, setSubscriptions] = useState(60)
  const [foodExpenses, setFoodExpenses] = useState(200)
  const [carExpenses, setCarExpenses] = useState(230 + 70 + 100)

  const calculatedIrpf = (100 - irpf) / 100

  const anualUsdBruteSalary = salary * 12
  const anualEurBruteSalary = salary * 12 * usdEurRatio
  const anualEurNetSalaryNoCuota = anualEurBruteSalary * calculatedIrpf
  const anualEurNetSalary =
    anualEurNetSalaryNoCuota - 12 * cuota - 12 * gestoria
  const mensualEurNetSalary = anualEurNetSalary / 12

  const monthlyExpenses = rent + debts + subs + foodExpenses + carExpenses
  const monthlySavings = mensualEurNetSalary - monthlyExpenses

  const maxRealStateValue = anualEurBruteSalary * 4
  const idealInitialPayment = maxRealStateValue * 0.3

  const idealMonthlyMortage10years =
    (maxRealStateValue - idealInitialPayment) / 120
  const idealMonthlyMortage20years =
    (maxRealStateValue - idealInitialPayment) / 240
  const idealMonthlyMortage30years =
    (maxRealStateValue - idealInitialPayment) / 360

  return (
    <Box p={2}>
      <Title variant="h3" sx={{ textAlign: "center" }}>
        🇪🇸 🐧Finance Friend 🐧🇪🇸
      </Title>
      <Box component="main" sx={{ maxWidth: 1300, margin: "auto" }}>
        <Box mb={4} />
        <Typography variant="h5">Tax info:</Typography>
        <Box mb={2} />

        <Textfield
          name="US Salary"
          label="US Salary"
          value={salary}
          onChange={e => setSalary(Number(e.target.value))}
        />
        <Textfield
          name="us/eur ratio"
          label="us/eur ratio"
          value={usdEurRatio}
          onChange={e => setUsdEurRatio(Number(e.target.value))}
        />
        <Textfield
          name="irpf"
          label="irpf"
          value={irpf}
          onChange={e => setIrpf(Number(e.target.value))}
        />
        <Textfield
          name="cuota"
          label="cuota"
          value={cuota}
          onChange={e => setCuota(Number(e.target.value))}
        />
        <Textfield
          name="gestoria"
          label="gestoria"
          value={gestoria}
          onChange={e => setGestoria(Number(e.target.value))}
        />

        <Box mt={3}>
          <Typography>Salario Bruto Usd: {anualUsdBruteSalary}$</Typography>
          <Typography>Salario Bruto Eur: {anualEurBruteSalary}€</Typography>
          <Typography>
            Salario neto anual: {anualEurNetSalary.toFixed(2)}€
          </Typography>
          <NetSalary>
            Salario neto mensual: {mensualEurNetSalary.toFixed(2)}€
          </NetSalary>
        </Box>

        <Box sx={{ borderTop: "1px solid grey", my: 4 }} />

        <Box>
          <Typography variant="h5">Expenses:</Typography>
          <Box mb={2} />

          <Box>
            <Textfield
              name="rent"
              label="Rent"
              value={rent}
              onChange={e => setRent(Number(e.target.value))}
            />
            <Textfield
              name="debts"
              label="Debts"
              value={debts}
              onChange={e => setDebts(Number(e.target.value))}
            />
            <Textfield
              name="carExpenses"
              label="Car Expenses"
              value={carExpenses}
              onChange={e => setCarExpenses(Number(e.target.value))}
            />
            <Textfield
              name="subs"
              label="Subscriptions"
              value={subs}
              onChange={e => setSubscriptions(Number(e.target.value))}
            />
            <Textfield
              name="foodExpenses"
              label="Food & expenses"
              value={foodExpenses}
              onChange={e => setFoodExpenses(Number(e.target.value))}
            />
          </Box>
          <Box mb={2} />

          <Typography>Monthly Expenses: {monthlyExpenses}€</Typography>
          <Typography>Monthly Savings: {monthlySavings}€</Typography>
        </Box>

        <Box sx={{ borderTop: "1px solid grey", my: 4 }} />

        <Box>
          <Typography variant="h5">Analytics:</Typography>

          <Typography>
            Rent law: {mensualEurNetSalary * 0.3 > rent ? "OK" : "WARNING"}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Rent expenses should not be &gt; 30% of monthly Net Income
          </Typography>

          <Typography>
            Car law:{" "}
            {mensualEurNetSalary * 0.2 > carExpenses ? "OK" : "WARNING"}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Car expenses (debt, gas, repairs) should not be &gt; 20% of monthly
            Net Income
          </Typography>
          <Typography>Max Real State Value: {maxRealStateValue}€</Typography>
          <Typography sx={{ fontSize: 12 }}>
            The value of the real state you should buy should not be &gt; than
            your anual brute salary * 4
          </Typography>
          <Typography>
            Ideal Mortage Initial payment: {idealInitialPayment}€
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The value of the initial mortage payment should be 0.3 value of the
            real State
          </Typography>
          <Typography>
            Ideal Mortage Montly payment 10 years: {idealMonthlyMortage10years}€{" "}
            -{" "}
            {idealMonthlyMortage10years < mensualEurNetSalary * 0.25
              ? "OK"
              : "WARNING"}
            {console.log(idealMonthlyMortage10years)}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The monthly value you have to pay to finish your mortage in 10 years
          </Typography>
          <Typography>
            Ideal Mortage Montly payment 20 years: {idealMonthlyMortage20years}€{" "}
            -{" "}
            {idealMonthlyMortage20years < mensualEurNetSalary * 0.25
              ? "OK"
              : "WARNING"}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The monthly value you have to pay to finish your mortage in 20 years
          </Typography>
          <Typography>
            Ideal Mortage Montly payment 30 years:{" "}
            {Number(idealMonthlyMortage30years).toFixed(2)}€ -{" "}
            {idealMonthlyMortage30years < mensualEurNetSalary * 0.25
              ? "OK"
              : "WARNING"}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The monthly value you have to pay to finish your mortage in 30 years
          </Typography>
          <Typography>
            Max montly mortage: {mensualEurNetSalary * 0.25}€
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            The max ideal montly mortage
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
