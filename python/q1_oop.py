class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
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
        

