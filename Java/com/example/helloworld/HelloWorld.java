package com.example.helloworld;

import java.sql.Array;
import java.util.*;

// target:
/*
* find the shortest paths from the source to all vertices in the given graph.
* */
public class HelloWorld {
    final static int n = 9;
    final static int src = 0;
    public static void main(String args[]) {
        // graph
        int[][] graph = new int[n][n];
        graph[0][1] = 4;
        graph[1][0] = 4;
        graph[0][7] = 8;
        graph[7][0] = 8;
        graph[1][7] = 11;
        graph[7][1] = 11;
        graph[1][2] = 8;
        graph[2][1] = 8;
        graph[7][8] = 7;
        graph[8][7] = 7;
        graph[7][6] = 1;
        graph[6][7] = 1;
        graph[2][8] = 2;
        graph[8][2] = 2;
        graph[8][6] = 6;
        graph[6][8] = 6;
        graph[2][3] = 7;
        graph[3][2] = 7;
        graph[2][5] = 4;
        graph[5][2] = 4;
        graph[6][5] = 2;
        graph[5][6] = 2;
        graph[3][5] = 14;
        graph[5][3] = 14;
        graph[3][4] = 9;
        graph[4][3] = 9;
        graph[4][5] = 10;
        graph[5][4] = 10;
        Boolean[] traversed = new Boolean[n];
        int[] dist = new int[n];
        for (int i = 0; i < n; i++) {
            traversed[i] = true;
            dist[i] = Integer.MAX_VALUE;
        }
        for (int i = 0; i < n; i++) {
            // How to represent a graph with weigh with 2D array,
            // The key process is find the smallest dist node that not including in spt array
            // Then put this node into spt array, s_node
            // Finally, change the dist value of the adj node of s_node if dist[s_node]+graph[s_node][adj_node] < dis[adj_node]
            // OK!!! 9:42 7/31/2023
        }
    }

}
