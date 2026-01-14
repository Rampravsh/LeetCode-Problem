def isPalindrome(x):
    num=x
    res=0
    while x>0:
            lastdigit=x%10
            res=res*10+lastdigit
            x=int(x/10)
            print(x)
            print('res: ',res)
    if res==num:
            return 'true'
    else:
            return 'false'
        
# Example usage
print(isPalindrome(121))