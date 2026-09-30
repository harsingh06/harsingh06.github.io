---
title: "A small architecture decision record that teams will actually use"
description: "A short example of recording the context, trade-offs and consequences behind a technical choice."
pubDate: 2026-09-29
tags: ["Architecture", "Decision records"]
category: "Architecture"
sample: true
---

> **Sample article:** This is demonstration content for the website. Replace or edit it before sharing it as your own published writing.

An architecture decision record (ADR) is useful when it helps the next person understand *why* a choice was made. It does not need to be a long document. A few clear paragraphs can capture the context that would otherwise disappear after a meeting.

## Start with the decision

Suppose a team needs to deliver notifications from several business services. They could call the notification service directly, or publish an event and let the notification service consume it. Write down the choice in one sentence: *Business services will publish notification events; the notification service will subscribe to them.*

## Record the trade-offs

The event approach keeps the business operation from waiting on notification delivery and allows new consumers to be added later. It also introduces operational work: event contracts, retries, duplicate handling, and monitoring. Direct calls would be easier to trace at first, but they couple the business request to the availability of the notification service.

## Make the consequences visible

The record should name what the team must do next. In this example, that includes defining an event schema, choosing an idempotency key, setting retry and dead-letter behavior, and tracing the event from producer to consumer.

A useful ADR stays close to the actual decision. Revisit it when the context changes, and link to the replacement decision rather than silently rewriting the history.
