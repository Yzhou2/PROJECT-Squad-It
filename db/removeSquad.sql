delete from user_squad where squad_id = $1 and userid = $2;
delete from bucketlist where squad_id = $1;
delete from squad where squad_id = $3;
