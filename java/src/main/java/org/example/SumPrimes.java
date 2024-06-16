package org.example;

import java.util.stream.IntStream;

public class SumPrimes {
    public static int sum(int num) {
        return IntStream.range(0, num + 1)
                .reduce(0, (acc, value) ->
                        isPrime(value) ? acc + value : acc);
    }

    private static boolean isPrime(int num) {
        for (double i = 2, s = Math.sqrt(num); i <= s ; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    }
}
