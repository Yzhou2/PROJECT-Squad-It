UPDATE travelPlan
SET country=$1, city=$2,	arrival=$3,	arday=$4,	armonth=$5,	aryear=$6,	depart=$7,	dpday=$8,	dpmonth=$9,	dpyear=$10,
lvcity=$11,	lvstate=$12,	lvcountry=$13
WHERE travelplan_id = $14 and userid = $15;
