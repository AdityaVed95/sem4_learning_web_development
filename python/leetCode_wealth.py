def richestCustomerWealthCalculator(accounts):
    sums = []

    for account in accounts:
        sum = 0
        for money in account:
            sum = sum + money
        sums.append(sum)
    
    #print(sums)

    max = sums[0]

    for sum in sums:
        if sum>max:
            max = sum

    return max

if __name__ == "__main__":
    accounts = [[2,8,7],[7,1,3],[1,9,5]]
    max = richestCustomerWealthCalculator(accounts)
    