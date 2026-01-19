package io_concurrency.logs;

import java.time.LocalDateTime;

public record LogEntry(
        LocalDateTime timestamp,
        String level,
        String message
) {}

