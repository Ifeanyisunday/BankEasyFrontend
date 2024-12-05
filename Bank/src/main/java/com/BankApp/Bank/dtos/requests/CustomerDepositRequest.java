package com.BankApp.Bank.dtos.requests;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class CustomerDepositRequest {
    private BigDecimal amount;
}