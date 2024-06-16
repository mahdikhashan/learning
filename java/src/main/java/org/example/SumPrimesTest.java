package org.example;

import static org.junit.jupiter.api.Assertions.*;

class SumPrimesTest {

    @org.junit.jupiter.api.Test
    void sum() {
        assertEquals(SumPrimes.sum(977), 73156);
    }
}
