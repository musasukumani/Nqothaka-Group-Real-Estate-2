"use client";

import { Calculator, Percent, Wallet } from "lucide-react";
import { useMemo, useState } from "react";

interface BondCalculatorProps {
  price: number;
}

function formatRand(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    currency: "ZAR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

export default function BondCalculator({ price }: BondCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState(price);
  const [deposit, setDeposit] = useState(Math.round(price * 0.1));
  const [interestRate, setInterestRate] = useState(11);
  const [termYears, setTermYears] = useState(20);

  const loanAmount = Math.max(purchasePrice - deposit, 0);

  const monthlyRepayment = useMemo(() => {
    const months = Math.max(termYears * 12, 1);
    const monthlyRate = interestRate / 100 / 12;

    if (monthlyRate === 0) {
      return loanAmount / months;
    }

    return (
      (loanAmount * monthlyRate * (1 + monthlyRate) ** months) /
      ((1 + monthlyRate) ** months - 1)
    );
  }, [interestRate, loanAmount, termYears]);

  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_22px_60px_rgb(0_0_0_/_0.07)] sm:p-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            Bond Calculator
          </p>
          <h2 className="text-[30px] font-medium tracking-[-0.035em]">
            Estimate your monthly repayment
          </h2>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-black text-white">
          <Calculator size={19} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <NumberField
            label="Purchase price"
            min={0}
            step={10000}
            value={purchasePrice}
            onChange={setPurchasePrice}
          />
          <NumberField
            label="Deposit"
            min={0}
            step={10000}
            value={deposit}
            onChange={setDeposit}
          />
          <NumberField
            label="Interest rate"
            min={0}
            step={0.25}
            value={interestRate}
            onChange={setInterestRate}
            suffix="%"
          />
          <NumberField
            label="Loan term"
            min={1}
            step={1}
            value={termYears}
            onChange={setTermYears}
            suffix="years"
          />
        </div>

        <div className="grid content-between gap-4 rounded-xl bg-black p-5 text-white">
          <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
            <span className="flex items-center gap-3 text-sm text-white/65">
              <Wallet size={18} />
              Bond amount
            </span>
            <strong className="text-right text-xl font-medium tracking-[-0.03em]">
              {formatRand(loanAmount)}
            </strong>
          </div>

          <div>
            <span className="flex items-center gap-3 text-sm text-white/65">
              <Percent size={18} />
              Estimated repayment
            </span>
            <p className="mt-4 text-[34px] font-medium leading-none tracking-[-0.04em]">
              {formatRand(monthlyRepayment)}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">
              Per month over {termYears} years. Estimate excludes once-off bond
              and transfer costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NumberField({
  label,
  min,
  onChange,
  step,
  suffix,
  value,
}: {
  label: string;
  min: number;
  onChange: (value: number) => void;
  step: number;
  suffix?: string;
  value: number;
}) {
  return (
    <label className="grid gap-2 rounded-xl bg-[#f5f2ec] px-4 py-4 text-sm font-medium text-neutral-800">
      <span className="text-xs uppercase tracking-[0.14em] text-neutral-500">
        {label}
      </span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="min-w-0 flex-1 bg-transparent text-lg font-medium tracking-[-0.02em] outline-none"
        />
        {suffix ? <span className="text-sm text-neutral-500">{suffix}</span> : null}
      </span>
    </label>
  );
}
