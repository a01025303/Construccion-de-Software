using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyWeapon2 : MonoBehaviour
{
    [SerializeField] private float moveSpeed;
    [SerializeField] private float rotateSpeed;
    private Transform playerTrans;
    private Vector3 targetPos;

    private float lifeTimer;
    [SerializeField] private float maxLife = 3.0f;

    // Start is called before the first frame update
    void Start()
    {
        playerTrans = GameObject.FindGameObjectWithTag("Main Character").GetComponent<Transform>();
    }

    // Update is called once per frame
    void Update()
    {
        SelfRotation();
        
        Vector3 difference = playerTrans.transform.position - transform.position;
        float rotationZ = Mathf.Atan2(difference.y, difference.x) * Mathf.Rad2Deg;
        //isRotating = true;
        transform.position = Vector2.MoveTowards(transform.position, playerTrans.position, moveSpeed * 2 * Time.deltaTime);
       
       lifeTimer += Time.deltaTime;
        if(lifeTimer >= maxLife)
        {
            //Instantiate(destroyEffect, transform.position, Quaternion.identity);
            Destroy(gameObject);
        }
    }
    private void SelfRotation()
    {
        transform.Rotate(0, 0, rotateSpeed * Time.deltaTime);//STEP 01 Weapon Rotation
    }
}
