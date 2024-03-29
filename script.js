// -------------------- Basics ---------------------------- //

function basics1() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    TAKING IN TWO NUMBERS AND SWAPPING THEM
    
    #include<stdio.h> //this includes the header file stdio

    void main()
    {
        int a,b,c; //three variables a,b,c defined with the data type of integer

        printf("%Enter a and b"); //printf("...") is used to display

        scanf("%d%d",&a,&b);
        //scanf is used to take in input vaues
        //%d is the format specifier used to identify which data
        // type is being entered.
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
   </xmp></pre>`;
}

function basics2() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    USING A FUNCTION TO SWAP TWO VARIABLES
    
    #include<stdio.h>

    void functionname(int aa, int bb) //this is known as function decleration
    
    //void - specifies the return type of the function.
    //     - the return type can be void/int/float/double/char...etc
    
    //the names you give in the function parameter are
    // known as FORMAL PARAMETERS.
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
   </xmp></pre>`;
}

function basics3() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
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

   </xmp></pre>`;
}

function basics4() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    PASSING ARRAY TO A FUNCTION
    
    #include<stdio.h>

    //the traditional way is void functionname( int a[10] ),
    // which can also be used but has its cons
    
    void functionname(int *a)
    //when you pass an array to a function,
    // the pointer to the first position gets stored in a
    //hence whatever change you make to the array will
    // be globally changed, ie changed everywhere.
    {
        int i;
        //we can use a[] as an array like we normally would
        for(i=0;i<10;i++)
            printf("%d ",a[i]);
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

   </xmp></pre>`;
}

// -------------------- Sorting ---------------------------- //

function bubblesort() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "block";
  document.getElementById("dybutton").innerHTML =
    "<button  onclick='setup(1)''>Visualize</button>";

  setup();

  document.getElementById("desc-main").innerHTML = `  
    <pre><xmp>
    
    for i in range(len(a) - 1):
            flag = True
            for j in range(len(a)-i-1):
                    if a[j] > a[j+1]:
                            a[j], a[j + 1] = a[j + 1], a[j]
                            flag = False
            if flag:
                    break
            
   </xmp></pre>
   `;
}

function mergesort() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "block";
  document.getElementById("dybutton").innerHTML =
    "<button  onclick='setup(2)''>Visualize</button>";

  setup();

  document.getElementById("desc-main").innerHTML = `<pre><xmp>
  
    
    def mergesort(left, right):
            if left < right:
                    mid = (left + right) // 2
                    mergesort(left, mid)
                    mergesort(mid + 1, right)
                    merge(left, mid, right)


    def merge(left, mid, right):
            left1 = left
            left2 = mid + 1

            print(f"left1 = {left1}, left2 = {left2}, right = {right} ")
            print(a[left1:mid+1], a[left2:right+1])
            temp = []
            while left1 <= mid and left2 <= right:
                if a[left1] <= a[left2]:
                        temp.append(a[left1])
                        left1 += 1
                else:
                        temp.append(a[left2])
                        left2 += 1
            # for the remaining elements
            while left1 <= mid:
                    temp.append(a[left1])
                    left1 += 1
            while left2 <= right:
                    temp.append(a[left2])
                    left2 += 1

            print(temp)
            for i in range(left, right + 1):
                    a[i] = temp.pop(0)
            print()


    a = [38, 27, 43, 3, 9, 82, 10]
    print(a)
    mergesort(0, len(a)-1)
    print(a)
        
    
   </xmp></pre>
   `;
}

function insertionsort() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "block";
  document.getElementById("dybutton").innerHTML =
    "<button  onclick='setup(3)''>Visualize</button>";

  setup();

  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    for i in range(1, len(a)):
            valuetoinsert = a[i]
            j = i - 1
            
            while a[j] > valuetoinsert and j >= 0:
                    a[j+1] = a[j]
                    j -= 1
            
            a[j+1] = valuetoinsert
    
   </xmp></pre>
    `;
}

function quicksort() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "block";
  document.getElementById("dybutton").innerHTML =
    "<button  onclick='setup(4)''>Visualize</button>";

  setup();

  document.getElementById("desc-main").innerHTML = `<pre><xmp>
        
    def partition(left, right):
            pivot = a[left]
            i = left
            j = right

            while i < j:
                    while a[i] <= pivot:
                            i += 1
                    while a[j] > pivot:
                            j -= 1
                    if i < j:
                            a[i], a[j] = a[j], a[i]
            a[left], a[j] = a[j], a[left]
            return j

        
    def quicksort(left, right):
            if left < right:
                    pivotLocation = partition(left, right)
                    quicksort(left, pivotLocation-1)
                    quicksort(pivotLocation+1, right)


    quicksort(0, len(a)-1)

    </xmp></pre>
    `;
}

function selectionsort() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "block";
  document.getElementById("dybutton").innerHTML =
    "<button  onclick='setup(5)''>Visualize</button>";

  setup();

  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    for i in range(len(a)-1):
            min = i

            for j in range(i + 1, len(a)):
                    if a[j] < a[min]:
                            min = j

            a[min], a[i] = a[i], a[min]
    </xmp></pre>
    `;
}

// -------------------- C Basics ---------------------------- //

function pattern1() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    #include<stdio.h>
    void main()
    {
        int row,i,spaces,value=1;
        for(spaces=10,row=1;row<=4;row++,spaces--)
        {
            for(i=1;i<spaces;i++)
                printf("  ");
            
            for(i=1;i<row;i++)
            {
                printf(" %d",value);
                value++;
            }
            printf("\\n");
        }
    }

   </xmp></pre>`;
}

function pattern2() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    #include<stdio.h>
    void main()
    {
        int row,spaces;
        for(row=1;row<6;row++)
        {
            for(spaces=1;spaces<=row;spaces++)
                {printf("*");}
            printf("\\n");
        }
    }
   </xmp></pre>`;
}

function infixtopostfix() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>

    int priority( char a)
    {
        if( a == '+' || a == '-')
            return 1;
        if( a == '/' || a == '*')
            return 2;
    }
    ---------------------------------
    printf("Enter expression : ");
    scanf("%s",s);

    for(i=0;i<strlen(s);i++) {
        if (s[i] == '(') {
            push(s[i]);
        }
        else if (s[i] == ')') {
            do  {
                data = pop();
                if(data == '(') break;
                printf("%c",data);
            }while(1);
        } 
        else if (s[i]=='+' || s[i]=='-' || s[i]=='*' || s[i]=='/') {
            while(top != -1 && stack[top] != '(' && priority(stack[top]) > priority(s[i]) )
            {
                data = pop();
                printf("%c",data);
            }
            push(s[i]);
        }
        else {
            printf("%c",s[i]);
        }

    }

    while(top!=-1){
        data = pop();
        printf("%c",data);
    }

   </xmp></pre>`;
}

function postfixeval() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    printf("Enter postfix expression : ");
    scanf("%s",s);
    -------------------------------
    for (i=0;i<strlen(s);i++)
	{
		if(isdigit(s[i]))
		{
			push(s[i] - '0');
		}
		else
		{
			a2 = pop();
			a1 = pop(); 
            if (s[i] == '+') push(a1+a2);
            else if (s[i] == '-') push(a1-a2);
            else if (s[i] == '*') push(a1*a2);
            else if (s[i] == '/') push(a1/a2);
            else {
                printf("INVALID OPERAND");
                exit(1);
            }
        }
    }
    ans = pop();
    printf("Answer : %f",ans);

   </xmp></pre>`;
}

// -------------------- Searching ---------------------------- //

function binarysearch() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre>
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
   </pre>`;
}

function lcs() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
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

    
   </xmp></pre>`;
}

// -------------------- Dynamic Programming ---------------------------- //

function floydwarshall() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    
    void main()
    {
        int size;
        printf("entersize of matrix");
        scanf("%d",&size);
        int a[size][size];
        int i,j,k;
        printf("enter elements in matrix\\n");
        for(i=0;i<size;i++)
            for(j=0;j<size;j++)
                scanf("%d",&a[i][j]);
                
        printf("entered matrix\\n");
        for(i=0;i<size;i++){
            for(j=0;j<size;j++)
                printf("%d\t",a[i][j]);
            printf("\\n");}
                
        for(k=0;k<size;k++)
        {
            for(i=0;i<size;i++)
            {
                for(j=0;j<size;j++)
                {
                    a[i][j]=min(a[i][k]+a[k][j],a[i][j]);
                }
            }
        }
        
        printf("Shortest distance matrix\\n");
        for(i=0;i<size;i++){
            for(j=0;j<size;j++)
                printf("%d\t",a[i][j]);
            printf("\\n");}
    }
    
   </xmp></pre>`;
}

function knapsack01() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    
    #include<stdio.h>

    int max(int a,int b)  //returns greater value of a or b
    {
        return a>b?a:b;
    }
    
    void main()
    {
        int items,totalWeight;
        printf("enter the weight of the sack : ");
        scanf("%d",&totalWeight);
        totalWeight++;
    
        printf("enter the number of items : ");
        scanf("%d",&items);
        items++;
    
        int weight[items], value[items], i, j;
        for(i=1;i<items;i++)
        {
            printf("enter weight of item %d : ",i);
            scanf("%d",&weight[i]);
            printf("enter profit/value of item %d : ",i);
            scanf("%d",&value[i]);
        }   //note weight and value arrays start from index 1 and go up till items+1
    
        int knapsack[items][totalWeight+1];
    
        for(i=0;i<items;i++)
            knapsack[i][0]=0;
        for(i=0;i<totalWeight;i++)
            knapsack[0][i]=0;
    
        //main algorithm
        for(i=1;i<items;i++)
        {
            for(j=1;j<totalWeight;j++)
            {
                if(weight[i] > j)
                {
                    knapsack[i][j] = knapsack[i-1][j];
                }
                else
                {
                    knapsack[i][j] = max(value[i]+knapsack[i-1][j-weight[i]] , knapsack[i-1][j]);
                }
            }
        }
    
        printf("knapsack matrix : \\n");
        for(i=0;i<items;i++)
        {
            for(j=0;j<totalWeight;j++)
                printf("%d ",knapsack[i][j]);
            printf("\\n");
        }
    
        i=items-1;
        j=totalWeight-1; //equal to 2d array final position
    
    
        printf("maximum value that can be placed in the sack : %d\\n",knapsack[i][j]);
    
    
        while(i>0 && j>0)
        {
            if(knapsack[i-1][j] == knapsack[i][j])
            {
                i--;
            }
            else
            {
                printf("item in the sack, weight : %d and value : %d\\n",weight[i],value[i]);
                j = j - weight[i];
                i--;
            }
        }
    }
    
   </xmp></pre>`;
}

function nqueens() {
  document.documentElement.scrollTop = 0;
  document.getElementById("desc-main-1").style.display = "none";
  document.getElementById("desc-main").innerHTML = `<pre><xmp>
    #include<stdio.h>
    #include<stdlib.h>
    
    int x[100], n;
    
    int place(int rowNum,int i) 
    {
        for(int j=1; j<rowNum; j++) {
            if ( ( x[j] == i ) || (abs(x[j]-i) == abs(j-rowNum)) ) {
                return 0;
            }
        }
        return 1;
    }
    
    void printt(int n)
    {
        for(int temp=1; temp < n+1; temp++) {
            for(int temp2=1; temp2 <n+1; temp2++) {
                if( temp2 == x[temp] )
                    printf(" Q ");
                else
                    printf(" * ");
            }
            printf("\\n");
        }
        printf("\\n");
    }
    
    void nQueens(int rowNum, int n)
    {
        for( int i=1; i<n+1; i++) {
            if (place(rowNum,i) == 1) {
                x[rowNum] = i;
                if (rowNum == n)
                    printt(n);
                else
                    nQueens(rowNum+1,n);
            }
        }
    }
    
    int main()
    {
        printf("Enter number of queens : ");
        scanf("%d",&n);
        for( int i=1; i<n; i++)
            x[i] = 0;
        nQueens(1,n);
    }
    
   </xmp></pre>`;
}
