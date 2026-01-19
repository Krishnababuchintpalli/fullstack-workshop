package io_concurrency.messaging;

import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class MessageProcessor {

    public static void runWithVirtualThreads(
            MessageQueue queue,
            int consumers,
            int messages) throws Exception {

        AtomicInteger processed = new AtomicInteger(0);

        long start = System.nanoTime();

        try (ExecutorService executor =
                     Executors.newVirtualThreadPerTaskExecutor()) {

            for (int i = 0; i < consumers; i++) {
                executor.submit(
                    new MessageConsumer(queue, processed)
                );
            }

            MessageProducer producer =
                    new MessageProducer(queue);
            producer.produceMessages(messages);

            while (processed.get() < messages) {
                Thread.sleep(10);
            }
        }

        long end = System.nanoTime();
        printStats("Virtual Threads",
                consumers, messages, start, end);
    }

    public static void runWithPlatformThreads(
            MessageQueue queue,
            int consumers,
            int messages) throws Exception {

        AtomicInteger processed = new AtomicInteger(0);

        long start = System.nanoTime();

        ExecutorService executor =
                Executors.newFixedThreadPool(consumers);

        for (int i = 0; i < consumers; i++) {
            executor.submit(
                new MessageConsumer(queue, processed)
            );
        }

        MessageProducer producer =
                new MessageProducer(queue);
        producer.produceMessages(messages);

        while (processed.get() < messages) {
            Thread.sleep(10);
        }

        executor.shutdownNow();

        long end = System.nanoTime();
        printStats("Platform Threads",
                consumers, messages, start, end);
    }

    private static void printStats(
            String type, int consumers,
            int messages, long start, long end) {

        double seconds =
                (end - start) / 1_000_000_000.0;
        double avgMs =
                (seconds * 1000) / messages;

        System.out.println("\n[" + type + "]");
        System.out.println("Consumers: " + consumers);
        System.out.println("Processed " + messages +
                " messages in " +
                String.format("%.2f", seconds) +
                " seconds");
        System.out.println("Average processing time: " +
                String.format("%.3f", avgMs) +
                " ms/message");
    }
}
