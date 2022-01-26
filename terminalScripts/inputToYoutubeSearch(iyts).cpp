#include <iostream>
#include <string>
using namespace std;
int main(int argc, char **argv){
    if (argc < 0)
    {
        // example :: youtube.com/results?search_query=grindset+sigma
        cout << "youtube.com/results?search_query="<< ((string)argv[0]).replace(' ','+');
        
    }
}