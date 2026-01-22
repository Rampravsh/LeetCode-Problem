def removeElement(nums, val):
        i=0
        j=len(nums)-1
        # res=[]
        while i<j:
            if nums[j]==val:
                while nums[j]==val:
                    j-=1
            if nums[i]==val:
                nums[i],nums[j]=nums[j],nums[i]
                i+=1
                j-=1
            else: 
                i+=1
        # for i in range(0,i):
        #     res.append(nums[i])
        # i =1
        return i
# Example usage
print(removeElement([3,2,2,3],3))   