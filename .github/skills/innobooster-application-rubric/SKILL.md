---
name: innobooster-application-rubric
description: "Assess a Danish Innobooster application against the Innovation Fund Denmark criteria. Use when scoring, reviewing, or preparing feedback on an Innobooster application, project plan, or budget."
argument-hint: "Attach or identify the Innobooster application and its budget/project plan"
---

# Innobooster Application Rubric

Use this skill to produce a documented, evidence-based pre-assessment of an Innobooster application. It is a decision-support tool, not an official assessment or a guarantee of funding.

## 1. Establish the assessment basis

1. Identify the application date/call, requested investment, chosen theme, and whether the application uses the De minimis or Group Exemption rules. If a detail is missing or the amount sits at a scheme boundary, flag it instead of guessing; verify the current call and rules.
2. Read all supplied application material that is permitted and relevant: the application, activity plan, and budget. Do not assume that an attachment outside the submitted application is part of the assessable application.
3. Read [the Innobooster rubric](./rubric/innobooster-rubric.md) before scoring. Its dimensions, weights, investigation points, evidence requirements, and score worksheet are the assessment baseline. Use the applicable, current Innovation Fund Denmark rules as the authority for formal requirements; local sources and their limits are listed in [README.md](./README.md).
4. Separate formal eligibility/compliance checks from the three scored assessment criteria. Mark each formal check as `opfyldt`, `ikke opfyldt`, or `uafklaret`, and state the evidence or missing information. Do not turn an unverified administrative fact into a low quality score.

### Check e-grant fields and character limits

When the application or draft follows the 2026 template, check each answer against its own field limit before scoring. The field wording and limits below come from `astro/src/content/docs/da/template/innobooster-2026.md`; confirm the live e-grant wording and limits for the actual call because forms may change.

| e-grant field                        | Prompt to check                                                                                                                                                                                                     |             Maximum |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------: |
| Ansøgningens titel                   | Application title                                                                                                                                                                                                   |       50 characters |
| Opsummering af Innobooster-projektet | Project summary                                                                                                                                                                                                     |      500 characters |
| Politisk tema                        | Explain briefly how the project fits the selected theme                                                                                                                                                             |      750 characters |
| Virksomheden                         | What the company does today; current solutions; current customers and competitors                                                                                                                                   |    1,350 characters |
| Ideen                                | What problem/challenge the solution addresses and how/why it works; customers and value; differentiation; development status and supporting basis (data, patent, prototype/MVP, tests, research, or customer input) |    2,050 characters |
| Innobooster-projektet                | What the project will do; work packages/activities; challenges and knowledge challenges; required competencies and contributions from suppliers/new hires                                                           |    2,750 characters |
| Markedet                             | Use the exact question shown in the live e-grant form; the local template gives a limit but no further question text                                                                                                |    2,200 characters |
| Din forretningsmæssige gevinst       | Use the exact question shown in the live e-grant form; the local template gives a limit but no further question text                                                                                                |    2,200 characters |
| Risikofaktor 1, 2 og 3               | Challenges (for example technical, regulatory, or market), how they will be addressed, and whether each is a project stop/go milestone                                                                              | 650 characters each |
| Teamet                               | Essential development/implementation team members, education, relevant experience/competencies, and each person's contribution                                                                                      |    2,150 characters |
| Aktivitet (each activity)            | What will concretely be carried out                                                                                                                                                                                 | 349 characters each |
| Hvem gør det? (each activity)        | Employee initials and budgeted hours, and/or named knowledge/material suppliers                                                                                                                                     | 199 characters each |
| Resultat/milepæl (each activity)     | Concrete, measurable expected result for the activity                                                                                                                                                               | 199 characters each |

Count each answer separately, excluding field labels and prompt text. Count spaces and punctuation; preserve the text exactly as submitted when checking it. Use a deterministic character counter when available, then compare with the live e-grant counter if shown. Report `antal/loft` and `over`, `inden for`, or `ikke kontrolleret` for every capped field. Do not silently truncate, rewrite, or merge fields to fit. If a limit is exceeded, flag it separately from the three assessment scores and suggest a shorter version that preserves the evidence. Do not infer limits for fields the template does not cap.

If only a full application document is provided, map its answers to these fields where possible. Mark ambiguous mappings or missing answers `uafklaret`; never present an estimate as an exact e-grant character count.

## 2. Score against the rubric

Apply every investigation point in [the rubric](./rubric/innobooster-rubric.md). Record a finding and evidence for each point, then assign one score per official dimension. Investigation points are prompts, not separately weighted sub-scores. Keep all three official dimensions at equal weight (1/3 each); do not add, remove, or rebalance dimensions.

Use the worksheet in the rubric to record the score, weighted score, evidence, gaps, and confidence. Cite the exact e-grant field and, where possible, a short quote or page/section. Separate what the application states, what an external source verifies, and what is an inference. Do not reward polished writing in place of substance.

If information is insufficient to assess a dimension, mark it `ikke vurderbar`, explain the missing evidence, and do not calculate an overall score until it can be assessed. Do not treat a missing fact as proof of poor quality or score it zero.

## 3. Run a separate formal and budget check

Check the applicable rule version and report issues separately from the quality scores. At minimum, verify or flag:

- Applicant/company requirements, including Danish CVR registration, SME status, and the applicable financial-foundation requirement.
- That the application uses the correct current call, theme, and funding-rule track for the requested investment.
- Requested investment, co-financing rate per budget line and overall, project period, and eligible cost categories against the applicable rules.
- Consistency between budget items, named suppliers/knowledge providers, activities, timing, and the requested funding.
- Required application materials and submission formalities. The current rules warn that extra documents beyond the permitted application materials may not be assessed and can lead to administrative rejection.

Do not give definitive legal, tax, state-aid, or audit advice. When the application date, call, scheme, or governing rule version matters, state what must be confirmed against the current official rules.

## 4. Interpret scores cautiously

The 2026 rules describe a six-point scale and state that an application cannot receive funding if its average is below 4 or any one criterion is below 3. You may show whether this rubric's scores meet those published numeric minimums, but label the result as an indicative comparison: this skill's anchors are not the Fund's assessor calibration. Meeting the minimums does not imply funding. Applications compete within a theme and funding period, and published cut-offs vary.

Do not use a prior period's cut-off as a forecast for a new application. Do not infer a funding probability from the score.

## 5. Return the assessment in Danish

Use this structure, keeping it concise but specific:

1. **Kort vurdering**: overall mean out of 6, if assessable; one-sentence rationale; explicitly call it a pre-assessment.
2. **Tegntjek**: a table with e-grant field, count/limit, status, and any proposed reduction. State when the count could not be verified exactly.
3. **Formelle forhold**: status (`opfyldt`, `ikke opfyldt`, `uafklaret`) and evidence for each check; list any potential rejection risks first.
4. **Rubric**: use the worksheet dimensions and weights; report each investigation point with its finding/evidence, then the dimension score, weighted score, key gap, and confidence (`høj`, `middel`, `lav`).
5. **Beregning og tærskler**: show the arithmetic mean; state whether the indicative minimums (mean at least 4 and every criterion at least 3) are met, if all criteria were assessable.
6. **Prioriterede forbedringer**: give the three most consequential, actionable changes, each linked to a criterion and an evidence gap.
7. **Forbehold og kilder**: note unresolved facts, the rule version and e-grant form version used, and exact application/source references. Distinguish applicant evidence from external facts and assumptions.

If the user asks only for a particular part of an application, assess that part and clearly label any overall conclusions that cannot yet be drawn.
