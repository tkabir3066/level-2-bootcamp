// 1.Synchronous way
//- single thread er moddhei hobe thread pool er moddhe pathabe na
// file read/ I/O intensive task --> single thread --> not go to the thread pool (response send to the user from single thread)

// 2.Asynchronous way
// file read/ I/O intensive task --> single thread --> event loop task ta ke  thread pool e niye jabe --> tread pool e task complete hobe
