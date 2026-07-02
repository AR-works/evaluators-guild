# Talent Collective — Canonical Platform Guide Template (v3, frozen)

Fixed structure for every platform page. Four files per platform, generated
together: `guide.md`, `metadata.yaml`, `schema.json`, `internal-links.md`.

---

## 1. File-Level Rules

- Heading hierarchy strictly H1 -> H2 -> H3. Never skip a level, never add H4+.
- Exactly one H1 per file (page title).
- H2 sections appear in identical order on every page (see §5).
- No emojis anywhere.
- Confidence labels are plain text words in parentheses, not symbols:
  `(Official)`, `(Verified)`, `(Community)`, `(Unknown)`.
- GFM tables only, identical column names across platforms.
- No HTML in guide.md or internal-links.md.

## 2. Confidence Label Definitions

| Label | Meaning |
|---|---|
| Official | Stated by the company itself — not independently verified |
| Verified | Confirmed by an independent, named source (funding databases, reputable media, filings) |
| Community | From worker reviews, forums, Glassdoor/Indeed, or other user-generated sources |
| Unknown | Not found in available research — stated explicitly, never guessed |

Applied inline after specific claims and as a `Source` column in Quick Facts
and Compensation tables. Every row/claim gets exactly one label.

## 3. Quick Facts Table (identical row order every page)

| Field | Details | Source |
|---|---|---|
| Company | | |
| Founded | | |
| Headquarters | | |
| Funding | | |
| Primary Roles | | |
| Remote Availability | | |
| Interview Type | | |
| Payment Model | | |
| Typical Skills | | |
| Estimated Difficulty | | |
| Best For | | |

## 4. Compensation Table

| Role Type | Reported Rate | Source |
|---|---|---|

## 5. Pros and Cons Table

| Pros | Cons |
|---|---|

## 6. Canonical Heading Order (guide.md)

1. How to Read This Guide (confidence label legend)
2. Overview
3. Quick Facts
4. What Is {Platform}?
5. Roles Offered (H3 per role)
6. Hiring Process (numbered list, no H3s)
7. Assessments
8. Compensation
9. Geographic Availability
10. Skills Required
11. Community Experiences (H3: Positive Feedback / H3: Common Complaints)
12. Who Should Consider {Platform}?
13. Who Should Skip {Platform}?
14. Pros and Cons
15. Interview Tips
16. Frequently Asked Questions
17. Related Topics
18. Conclusion

## 7. metadata.yaml Schema

```yaml
title:
metaDescription:
slug:
ogDescription:
platform:
category:
lastReviewed:
readingTime:
tags: []
searchKeywords: []
difficulty:
remote:
interviewType:
payRange:
featured: false
```

## 8. schema.json Requirements

Valid Schema.org JSON-LD, array of three objects: Article, FAQPage,
BreadcrumbList. Only fields supported by the dossier are populated;
unsupported fields are omitted rather than fabricated.

## 9. internal-links.md Format

Four plain lists, page titles only, no URLs:
- Related Platform Guides
- Related Career Guides
- Related Comparison Pages
- Related Resource Pages

## 10. Editorial Standards (unchanged)

Paraphrase everything. No fabricated statistics, salaries, or interview
questions. Conflicting reports get both sides stated with labels on each.
Neutral Conclusion tone. Unknown fields are stated as Unknown, never omitted
from required tables.
