function basics1(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    TAKING IN TWO NUMBERS AND SWAPPING THEM
    
    #include<stdio.h> //this includes the header file stdio

    void main()
    {
        int a,b,c; //three variables a,b,c defined with the data type of integer

        printf("%Enter a and b"); //printf("...") is used to display

        scanf("%d%d",&a,&b);
        //scanf is used to take in input vaues
        //%d is the format specifier used to identify which data type is being entered.
        //in this case, %d is for the integer.
        //the number of format specifiers should match the number and type of the variables
        //&a is used to store the input in the address of variable a

        c = a;
        a = b;
        b = c;
        //above is used to swap a and b
        //first we store a in c, then assign value b to a, and then c to a;

        printf("a is %d and b is %d",a,b);
        //%d in printf prints the variable mentioned after ",  
        //the variable type should match the format specifier.
    }
   </xmp></pre>`       
};

function basics2(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    USING A FUNCTION TO SWAP TWO VARIABLES
    
    #include<stdio.h>

    void functionname(int aa, int bb) //this is known as function decleration
    
    //void - specifies the return type of the function.
    //     - the return type can be void/int/float/double/char...etc
    
    //the names you give in the function parameter are known as FORMAL PARAMETERS.
    //they will be the variable names you will use in this function.
    //it does not have to match what the parameters when you call it.
    {
        //this is the function definition
    
        int temp;
    
        temp = aa;
        aa = bb;
        bb = temp;
        //swapped aa and bb
    
        printf("aa is %d and bb is %d",aa,bb);
    }
    
    void main()
    {
        int a,b;
        printf("enter a and b");
        scanf("%d%d",&a,&b);
    
        functionname( a , b );
        //this is known as the function call.
    
        //you pass the same number of parameters with the same data type to the function.
        //here a and b are known as actual parameters.
    }
   </xmp></pre>`       
};

function basics3(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    ARRAYS IN C
    
    #include<stdio.h>

    void main()
    {
        int i;
        int a[10];

        //an array is a

        //above is the declaration of an integer array with name a and size 100;
        //indexing of arrays start from 0...
        //first element is called a[0] and last is a[9]
        //it means that the array starts from 0, instead of usually 1

        
        //how to read elements into an array
        //we make a repetitive loop which goes from 0 to 9, ie the length of the array

        //if we were to give value to array elements using logic, it would be like:
        // loop(i from 0 to array length -1 )
        //     take in value in array at position i
        // end loop

        for(i=0 ; i <= 10 - 1 ; i++)
        {
            scanf("%d",&a[i]);
        }
        //all array elements will be the same, ie integers in this case.

        //print the array
        //same logic, make a loop from 0 to length-1, and print

        for(i=0 ; i<=10-1 ; i++)
        {
            printf("%d",a[i]);
        }      
    }

   </xmp></pre>`       
};

function basics4(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    PASSING ARRAYS TO A FUNCTION
    
    #include<stdio.h>

    //traditional way is functionname( int a[10] ), which can also be used but has its cons
    
    functionname(int *a)
    //when you pass an array to a function, the pointer to the first position gets stored in a
    //hence whatever change you make to the array will be globally changed, ie changed everywhere.
    {
        int i;
        //we can use a[] as an array like we normally would
        for(i=0;i<10;i++)
            printf("%d",a[i]);
        //above is a loop to print the array passed
        
    }
    
    void main()
    {
        int a[10];
        int i;
    
        for(i=0;i<10;i++)
        {
            a[i] = i;
            //looping through each array element, 
            //and setting its value to that of the loop number 
        }
        functionname(a);
        //above is the function call, where the array a is passed;
        //run the code and make changes to get a better understanding. 
    }

   </xmp></pre>`       
};

function binarysearch(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre>
    void binarysearch(int *a, int start, int end, int target)
    {
        if(end < start){
            printf("array does not contain the target element");
            exit(1);
        }
        int mid = (start+end)/2;

        if(a[mid]==target){   <i>//ie if target found</i>
            printf("element %d found at location %d",target,mid+1);
            exit(1);
        }                                       
        else if(a[mid] > target)
                <i>//new end would be mid-1, because target in the lower half</i>
            binarysearch(a,start,mid-1,target);
        else     <i>//new start would be mid+1, because target in upper half</i>
            binarysearch(a,mid+1,end,target);
    }
   </pre>`       
};

function bubblesort(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void bubblesort(int a[], int length)
    {
        int i,j,temp,flag;
        for(i=0;i<length-1;i++)
        {
            flag=1;
            for(j=0;j<length-i-1;j++)
            {
                if(a[j] > a[j+1])
                {
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                    flag=0;
                }
                if(flag==1) break;
            }
        }
    }
   </xmp></pre>`       
};

function insertionsort(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void insertionsort(int a[], int length)
    {
        int i,j,val;
        for(i=1;i<length;i++)
        {
            val=a[i];
            for(j=i-1;j>=0;j--)
                if(val<a[j])
                    a[j+1]=a[j];
                else
                    break;
    
            a[j+1]=val;
        }
    }
    
   </xmp></pre>`       
};

function quicksort(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void quicksort(int *a, int left, int right)
    {
        int i,j,k,temp,pivot;
        i=left;
        j=right;
        pivot=a[(left+right)/2];

        while(i<j)
        {
            while(a[i]<pivot) 
                i++;
            while(pivot<a[j])
                j--;
            if(i<j)
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
                
        if(left<i)
            quicksort(a,left,i-1);
        if(j<right)
            quicksort(a,j+1,right);
    }
    </xmp></pre>`
}

function lcs(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre><xmp>
    void lcs(char *x, char *y)
    {
        //finding the LCS and direction matrices
        int i,j,xlength,ylength;
        xlength=strlen(x);
        ylength=strlen(y);
        
        int val[xlength+1][ylength+1];
        char direction[xlength+1][ylength+1];
        
        for(i=0;i<xlength+1;i++)
            val[i][0]=0;
        for(j=0;j<ylength+1;j++)
            val[0][j]=0;
        
        for(i=1;i<xlength+1;i++){
            for(j=1;j<ylength+1;j++)
            {
                if(x[i-1]==y[j-1]){
                    val[i][j]=val[i-1][j-1]+1;
                    direction[i][j]='d';//d for diagonal element + 1
                }
                else
                if(val[i][j-1]>=val[i-1][j]){
                    val[i][j]=val[i][j-1];
                    direction[i][j]='l';//l for from left element
                }    
                else
                {
                    val[i][j]=val[i-1][j];
                    direction[i][j]='u';//u for from upper element
                }
            }
        }
        //to print the LCS
        i=xlength;
        j=ylength;
        char final[i>j?i:j];
        int temp=0;
    
        while(i>=0 && j>=0)
        {
            if(direction[i][j]=='d')
            {
                final[temp++]=x[i-1];
                i--;j--;
            }
            else if(direction[i][j]=='u')
                i--;
            else    
                j--;
        }
        temp--;
        //printing final strinf(ie LCS) in reverse order
        printf("LCS IS : ");
        while(temp!=-1){
            printf("%c",final[temp]);
            temp--;
        }
    }

    
   </xmp></pre>`       
};


