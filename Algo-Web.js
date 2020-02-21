function binarysearch(){
    document.documentElement.scrollTop = 0;
    document.getElementById("desc-main").innerHTML=`<pre>
    void binarysearch(int *a,int start, int end, int target)
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


