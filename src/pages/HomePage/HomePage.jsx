import React, { useState } from "react"
import { Title, Textfield, NetSalary } from "./HomePageStyledComponents"
import { Typography, Box } from "@mui/material"

const HomePage = () => {
  const [salary, setSalary] = useState(3700)
  const [usdEurRatio, setUsdEurRatio] = useState(0.88)
  const [irpf, setIrpf] = useState(20)
  const [cuota, setCuota] = useState(290)
  const [gestoria, setGestoria] = useState(60)

  const calculatedIrpf = (100 - irpf) / 100

  const anualUsdBruteSalary = salary * 12
  const anualEurBruteSalary = salary * 12 * usdEurRatio
  const anualEurNetSalaryNoCuota = anualEurBruteSalary * calculatedIrpf
  const anualEurNetSalary =
    anualEurNetSalaryNoCuota - 12 * cuota - 12 * gestoria
  const mensualEurNetSalary = anualEurNetSalary / 12

  return (
    <Box p={2}>
      <Title variant="h2">MdeMora US Contractor Calculator</Title>
      <Box mb={4} />
      <Textfield
        name="US Salary"
        label="US Salary"
        value={salary}
        onChange={e => setSalary(e.target.value)}
      />
      <Textfield
        name="us/eur ratio"
        label="us/eur ratio"
        value={usdEurRatio}
        onChange={e => setUsdEurRatio(e.target.value)}
      />
      <Textfield
        name="irpf"
        label="irpf"
        value={irpf}
        onChange={e => setIrpf(e.target.value)}
      />
      <Textfield
        name="cuota"
        label="cuota"
        value={cuota}
        onChange={e => setCuota(e.target.value)}
      />
      <Textfield
        name="gestoria"
        label="gestoria"
        value={gestoria}
        onChange={e => setGestoria(e.target.value)}
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
    </Box>
  )
}

export default HomePage
