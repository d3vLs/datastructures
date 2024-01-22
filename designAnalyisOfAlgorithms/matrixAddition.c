#include <stdio.h>

int main()
{
    int r, c, i, j;
    int a[10][10], b[10][10], add[10][10];

    printf("Enter the number of rows:\n");
    scanf("%d", &r);
    printf("Enter the number of columns:\n");
    scanf("%d", &c);

    printf("Enter the elements of first matrix:\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter the elements of second matrix:\n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            scanf("%d", &b[i][j]);
        }
    }

    // addition
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            add[i][j] = a[i][j] + b[i][j];
        }
    }

    // printing the result
    printf("\nSum of two matrices: \n");
    for (i = 0; i < r; i++)
    {
        for (j = 0; j < c; j++)
        {
            printf("%d", add[i][j]);
        }
        if (j == c - 1)
        {
            printf('\n');
        }
    }
}